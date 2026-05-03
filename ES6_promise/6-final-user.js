import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promiseA = signUpUser(firstName, lastName);
  const promiseB = uploadPhoto(fileName);

  return Promise.allSettled([promiseA, promiseB]).then((results) =>
    results.map((result) => {
      if (result.status === 'fulfilled') {
        return result;
      }

      return {
        status: 'rejected',
        value: result.reason.toString(),
      };
    })
  );
}
