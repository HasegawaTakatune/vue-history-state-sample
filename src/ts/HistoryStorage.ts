export default class HistoryStorage {

    static Save(obj: Object): void {
        const data = { historyStorage: JSON.stringify(obj) };
        window.history.replaceState(data, '');
    }

    static Get() {
        const json = window.history.state?.historyStorage ?? 'null';
        const data = JSON.parse(json);

        return data;
    }
}

