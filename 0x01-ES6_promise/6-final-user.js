import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promiseStatus = [];
    const signUpUserRes = signUpUser(firstName, lastName);
    const uploadPhotoRes = uploadPhoto(fileName);
    Promise.all([signUpUserRes, uploadPhotoRes]).then(([signUpUserData, uploadPhotoData]) => {
        console.log(signUpUserData);
        console.log(uploadPhotoData);
        promiseStatus.push(signUpUserData);
        promiseStatus.push(uploadPhotoData);
    });
}