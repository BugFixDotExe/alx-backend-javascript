import ClassRoom from './0-classroom';

export default function initializeRooms () {
    const classRoomObj = []
    const classRoom01 = new ClassRoom(19);
    const classRoom02 = new ClassRoom(20);
    const classRoom03 = new ClassRoom(34);
    classRoomObj.push(classRoom01, classRoom02, classRoom03)
    return (classRoomObj);
}