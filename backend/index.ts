import App from './providers/app';

/**
 * Load Configuration
 */
App.loadConfigs();

/**
 * Run the Database pool
 */
App.loadDatabase();

/**
 * Run the Server on Clusters
 */
App.loadServer();
