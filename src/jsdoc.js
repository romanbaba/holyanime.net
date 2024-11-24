/**
 * @typedef {{
 * image: string | null;
 * name: string;
 * description: string;
 * date: Date;
 * }} NotificationData
 * 
 * @typedef {{
 * name: string;
 * image: string;
 * email: string;
 * notifications: NotificationData[];
 * createdAt: string;
 * updatedAt: string;
 * }} UserData
 * 
 * @typedef {{
 * id: string;
 * name: string;
 * description: string;
 * genres: string[];
 * score: string;
 * background: string;
 * foreground: string | null;
 * episodes: any[][];
 * myanimelist: string;
 * }} MovieData
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default { };