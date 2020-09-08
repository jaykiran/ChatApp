/* eslint-disable prettier/prettier */
import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCp6TR3ai_H9PuQeOuLfsT7uzUQ_QVI6cA',
    databaseURL: 'https://chatapp-52419.firebaseio.com/',
    projectId: 'chatapp-52419',
    appId: '1:780971865008:android:1eb7d3ee9c6ebd3038dc75',
};

export default Firebase.initializeApp(firebaseConfig);

