export interface Environments {
    /**
     * The path to the .env file
     * @default '.env'
     */
    envPath: string;
    readVariables: () => string[];
    /**
     * Sets the environment variable
     * @param {string} key The key of the environment variable
     * @param {string} value The value of the environment variable
     * @example
     *
     * const env = Environments()
     *
     * env.setVariable('PORT', '3000')
     */
    setVariable: (key: string, value: string) => void;
    /**
     * Deletes the environment variable
     * @param {string} key The key of the environment variable
     * @example
     *
     * const env = Environments()
     *
     * env.deleteVariable('PORT')
     */
    deleteVariable: (key: string) => void;
    /**
     * Parses the environment variables from the .env file
     * @returns {Object} The parsed environment variables
     * @example
     *
     * const env = Environments()
     *
     * console.log(env.parseVariables()) // => { PORT: '3000' }
     */
    parseVariables: () => { [key: string]: string };
    /**
     * Loads the environment variables from the .env file
     *
     * @example
     *
     * const env = Environments()
     *
     * env.load()
     */
    load: () => void;
}

declare module 'environments' {
    /**
     * Creates an instance of Environments
     * @param {string} [envPath='.env'] The path to the .env file
     * @returns {Environments} The Environments instance
     */
    export default function Environments(envPath?: string): Environments;
}
