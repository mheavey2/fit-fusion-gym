import styles from "./Classes.module.css";
import { useState, useMemo } from "react";

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

  const filteredClassesBySelectedDay = useMemo(() => {
    return classTimes.filter(
      (classItem) =>
        classItem.day.includes(selectedDay) &&
        (!selectedClassType || classItem.type === selectedClassType)
    );
  }, [selectedDay, selectedClassType]);

  const handleNextDay = () => {
    const currentIndex = days.indexOf(selectedDay);
    const nextIndex = (currentIndex + 1) % days.length;
    setSelectedDay(days[nextIndex]);
  };
  const handlePreviousDay = () => {
    const currentIndex = days.indexOf(selectedDay);
    const previousIndex = (currentIndex - 1 + days.length) % days.length;
    setSelectedDay(days[previousIndex]);
  };

  return (
    <div className={styles.classesContainer}>
      {/* filters and navigation */}
      <div className={styles.scheduleFilters}>
        <div className={styles.dayNavigation}>
          <button className={styles.navDayButton} onClick={handlePreviousDay}>
            ←
          </button>
          <h2>{selectedDay}</h2>
          <button className={styles.navDayButton} onClick={handleNextDay}>
            →
          </button>
        </div>
        <div className={styles.classFilter}>
          <select
            value={selectedClassType || ""}
            onChange={(e) => setSelectedClassType(e.target.value)}
            className={styles.classTypeDropdown}
          >
            <option value="" className={styles.dropdownItem}>
              All Classes
            </option>
            {classList.map((classType) => (
              <option
                key={classType}
                value={classType}
                className={styles.dropdownItem}
              >
                {classType}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* mobile view content */}
      <div className={styles.dayScheduleContainer}>
        <div className={styles.dayColumn} key={selectedDay}>
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
      <div className={styles.weekScheduleContainer}>
        {days.map((day) => (
          <div className={styles.dayColumn} key={day}>
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
