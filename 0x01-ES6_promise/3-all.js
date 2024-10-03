import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadPhotoRes = uploadPhoto();
  const createUserRes = createUser();
  Promise.all([uploadPhotoRes, createUserRes]).then(([uploadResult, createUserResult]) => {
    console.log(`${uploadResult.body} ${createUserResult.firstName} ${createUserResult.lastName}`);
  })
    .catch(() => {
      console.log('Signup system offline');
    });
}
