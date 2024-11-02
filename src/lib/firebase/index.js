import { ref, set, push, get } from 'firebase/database';
import Notification from '@/lib/notification';
import { database } from '@/constants/firebase-config';

const serializer = (obj = {}) => {
    return Object.keys(obj).map((k) => {
        return {
            id: k,
            ...obj[k],
        };
    });
};

export default class FirebaseHelper {
    static sendMessage = async (message, onSuccess, onError) => {
        push(ref(database, 'contact/'), message)
            .then((res) => {
                Notification.success(`Message received! We'll be in touch soon.`);
            })
            .catch((e) => {
                Notification.error('Something went wrong!');
            });
    };

    static saveLeads = async (obj) => {
        push(ref(database, 'leads/'), obj)
            .then((res) => {
                Notification.success(`Leads records saved successfully.`);
            })
            .catch((e) => {
                Notification.error('Something went wrong!');
            });
    };

    static fetchLeads = async () => {
        try {
            const leadsRef = ref(database, 'leads/');
            const snapshot = await get(leadsRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                Notification.success('Leads fetched successfully.');
                const d = serializer(data);
                return (d || []).reverse();
            } else {
                Notification.info('No leads found.');
                return null;
            }
        } catch (error) {
            Notification.error('Error fetching leads.');
            console.error('Error fetching leads:', error);
            return null;
        }
    };
}
