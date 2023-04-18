export interface RapidEnv {
    /**
     * The path to the .env file
     * @default '.env'
     */
    envPath: string;
    /**
     * Reads the environment variables from the .env file
     * @returns {string[]} The environment variables
     * @example
     *
     * const env = RapidEnv()
     *
     * console.log(env.readVariables()) // => ['PORT=3000']
     */
    readVariables: () => string[];
    /**
     * Sets the environment variable
     * @param {string} key The key of the environment variable
     * @param {string} value The value of the environment variable
     * @example
     *
     * const env = RapidEnv()
     *
     * env.setVariable('PORT', '3000')
     */
    setVariable: (key: string, value: string) => void;
    /**
     * Deletes the environment variable
     * @param {string} key The key of the environment variable
     * @example
     *
     * const env = RapidEnv()
     *
     * env.deleteVariable('PORT')
     */
    deleteVariable: (key: string) => void;
    /**
     * Parses the environment variables from the .env file
     * @returns {Object} The parsed environment variables
     * @example
     *
     * const env = RapidEnv()
     *
     * console.log(env.parseVariables()) // => { PORT: '3000' }
     */
    parseVariables: () => { [key: string]: string };
    /**
     * Loads the environment variables from the .env file
     *
     * @example
     *
     * const env = RapidEnv()
     *
     * env.load()
     */
    load: () => void;
}

declare module 'rapidenv' {
    /**
     * Creates an instance of RapidEnv
     * @param {string} [envPath='.env'] The path to the .env file
     * @returns {RapidEnv} The RapidEnv instance
     */
    export default function RapidEnv(envPath?: string): RapidEnv;
}
