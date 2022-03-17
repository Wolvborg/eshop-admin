import express, { Application } from 'express';
import path from 'path';
import Debug from 'debug';

const debug = Debug('file:middleware/views');

class Views {
  public static mount(_expressApp: Application): Application {
    debug('Mounting public folder');

    _expressApp.use('/public', express.static(path.join(__dirname, '../public')));
    return _expressApp;
  }
}

export default Views;
