import App from './providers/app';
import Debug from 'debug';
const debug = Debug('file:index');

/**
 * Load Configuration
 */
debug('Loading Envireonment Configs');
App.loadConfigs();

/**
 * Run the Database pool
 */
debug('Initializing Database');
App.loadDatabase();

/**
 * Run the Server on Clusters
 */
debug('Initializing Server');
App.loadServer();
