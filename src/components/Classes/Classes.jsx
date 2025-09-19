import styles from "./Classes.module.css";
import { useState, useMemo, useRef, useEffect } from "react";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const classList = [
  "Pilates",
  "Zumba",
  "Crossfit",
  "Strength",
  "Yoga",
  "Cardio",
];

const classTimes = [
  {
    startTime: "06:00",
    endTime: "06:45",
    id: "PilatesAM",
    day: ["Mon", "Wed", "Fri"],
    type: classList[0],
  },
  {
    startTime: "07:00",
    endTime: "07:45",
    id: "CardioAM",
    day: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
    type: classList[5],
  },
  {
    startTime: "09:30",
    endTime: "10:15",
    id: "ZumbaAM",
    day: ["Tues", "Thurs"],
    type: classList[1],
  },
  {
    startTime: "11:30",
    endTime: "12:15",
    id: "CrossfitAM",
    day: ["Mon", "Sat", "Sun"],
    type: classList[2],
  },
  {
    startTime: "12:30",
    endTime: "13:15",
    id: "CardioPM",
    day: ["Mon", "Tues"],
    type: classList[5],
  },
  {
    startTime: "17:30",
    endTime: "18:15",
    id: "StrengthPM",
    day: ["Mon", "Tues"],
    type: classList[3],
  },
  {
    startTime: "18:30",
    endTime: "19:15",
    id: "CrossfitPM",
    day: ["Mon", "Tues", "Thurs", "Sat"],
    type: classList[2],
  },
  {
    startTime: "19:30",
    endTime: "20:15",
    id: "YogaPM",
    day: ["Wed", "Sat"],
    type: classList[4],
  },
];

const Classes = () => {
  const currentDate = new Date();
  let currentDay = days[currentDate.getDay()];
  const [selectedDay, setSelectedDay] = useState(currentDay);
  const [selectedClassType, setSelectedClassType] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropDownRef = useRef(null);

  // close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //toggle classes dropdown
  const toggleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  //handle class type selection
  const handleClassTypeSelect = (classType) => {
    setSelectedClassType(classType);
    setIsDropdownOpen(false);
  };

  //filter classes for the day view on mobile
  const filteredClassesBySelectedDay = useMemo(() => {
    return classTimes.filter(
      (classItem) =>
        classItem.day.includes(selectedDay) &&
        (!selectedClassType || classItem.type === selectedClassType)
    );
  }, [selectedDay, selectedClassType]);

  // logic for navigating to next day on mobile view
  const handleNextDay = () => {
    const currentIndex = days.indexOf(selectedDay);
    const nextIndex = (currentIndex + 1) % days.length;
    setSelectedDay(days[nextIndex]);
  };

  // logic for navigating to previous day on mobile view
  const handlePreviousDay = () => {
    const currentIndex = days.indexOf(selectedDay);
    // add days.length to ensure that when its at index 0 (monday) it will still go back ((0-1+7)%7 = 6 i.e. sunday)
    const previousIndex = (currentIndex - 1 + days.length) % days.length;
    setSelectedDay(days[previousIndex]);
  };

  //determine the dropdown header text content
  const getDropdownHeaderText = () => {
    return selectedClassType || "All Classes";
  };

  return (
    <div
      className={styles.classesContainer}
      role="region"
      aria-label="Claa Schedule"
    >
      {/* filters and navigation */}
      <div
        className={styles.scheduleFilters}
        role="toolbar"
        aria-label="Schedule Filters"
      >
        <div
          className={styles.dayNavigation}
          role="group"
          aria-label="Day Navigation"
        >
          <button
            className={styles.navDayButton}
            onClick={handlePreviousDay}
            role="Previous Day"
          >
            ←
          </button>
          <h2>{selectedDay}</h2>
          <button
            className={styles.navDayButton}
            onClick={handleNextDay}
            aria-label="Next Day"
          >
            →
          </button>
        </div>
        <div
          className={styles.classFilter}
          role="group"
          aria-label="Class Type Filter"
        >
          <div
            ref={dropDownRef}
            className={styles.classTypeDropdown}
            role="combobox"
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
          >
            <div className={styles.dropdownHeader} onClick={toggleDropDown}>
              {getDropdownHeaderText()}
              <span className={styles.dropdownArrow}>
                {isDropdownOpen ? "▲" : "▼"}
              </span>
            </div>
            {isDropdownOpen && (
              <div className={styles.dropdownList}>
                {selectedClassType !== null && (
                  <div
                    className={styles.dropdownItem}
                    onClick={() => {
                      handleClassTypeSelect(null);
                    }}
                  >
                    All Classes
                  </div>
                )}
                {classList.map((classType) => (
                  <div
                    className={styles.dropdownItem}
                    key={classType}
                    onClick={() => {
                      handleClassTypeSelect(classType);
                    }}
                  >
                    {classType}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile view content */}
      <div
        className={styles.dayScheduleContainer}
        role="list"
        aria-label={`Classes on ${selectedDay}`}
      >
        <div className={styles.dayColumn} key={selectedDay} role="listitem">
          {filteredClassesBySelectedDay.length > 0 ? (
            filteredClassesBySelectedDay.map((classItem) => (
              <div key={classItem.id} className={styles.classItem}>
                <div className={styles.classTime}>
                  {classItem.startTime} - {classItem.endTime}
                </div>
                <div className={styles.classType}>{classItem.type}</div>
              </div>
            ))
          ) : selectedClassType ? (
            <div className={styles.noClassMsg}>
              No {selectedClassType} classes today
            </div>
          ) : (
            <div className={styles.noClassMsg}>No Classes Scheduled Today</div>
          )}
        </div>
      </div>
      {/* Desktop view content  */}
      <div
        className={styles.weekScheduleContainer}
        role="table"
        aria-label="Weekly Class Schedule"
      >
        {days.map((day) => (
          <div
            className={styles.dayColumn}
            key={day}
            role="row"
            aria-label={`${day} Schedule`}
          >
            <h3 className={styles.dayHeader}>{day}</h3>
            {classTimes
              .filter(
                (classItem) =>
                  classItem.day.includes(day) &&
                  (!selectedClassType || classItem.type === selectedClassType)
              )
              .map((classItem) => (
                <div key={classItem.id} className={styles.classItem}>
                  <div className={styles.classTime}>
                    {classItem.startTime} - {classItem.endTime}
                  </div>
                  <div className={styles.classType}>{classItem.type}</div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
