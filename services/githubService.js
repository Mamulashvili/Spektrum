import { apiClient } from "./apiClient";

export default {
    getGithubData: () => {
        try {
            return apiClient('https://api.github.com').get('/users/Mamulashvili');
        } catch (error) {
            return 0;
        }
    }
}
