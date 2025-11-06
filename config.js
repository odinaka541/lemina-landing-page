// configuration loader for environment variables
// this module loads configuration from .env file or environment

class Config {
    constructor() {
        this.config = {};
        this.loadEnvironment();
    }

    async loadEnvironment() {
        try {
            // in a browser environment, we need to fetch the .env file
            const response = await fetch('/.env');
            const text = await response.text();
            
            // parse .env format
            const lines = text.split('\n');
            for (const line of lines) {
                const trimmed = line.trim();
                if (trimmed && !trimmed.startsWith('#')) {
                    const [key, ...valueParts] = trimmed.split('=');
                    if (key && valueParts.length > 0) {
                        this.config[key.trim()] = valueParts.join('=').trim();
                    }
                }
            }
        } catch (error) {
            console.warn('could not load .env file, using defaults');
            // fallback to hardcoded values for development
            this.config = {
                SUPABASE_URL: 'YOUR_PROJECT_URL_HERE',
                SUPABASE_ANON_KEY: 'YOUR_ANON_KEY_HERE',
                FORMSPREE_ENDPOINT: 'xjkporzg',
                NOTIFICATION_EMAIL: 'prince4albert@gmail.com'
            };
        }
    }

    get(key) {
        return this.config[key];
    }

    getSupabaseUrl() {
        return this.get('SUPABASE_URL');
    }

    getSupabaseKey() {
        return this.get('SUPABASE_ANON_KEY');
    }

    getFormspreeEndpoint() {
        return this.get('FORMSPREE_ENDPOINT');
    }

    getNotificationEmail() {
        return this.get('NOTIFICATION_EMAIL');
    }
}

// export for use in other files
window.Config = Config;