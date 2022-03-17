import express, { Application } from 'express';
import cookieParser from 'cookie-parser';

class Https {
  public static mount(_expressApp: Application): Application {
    _expressApp.use(express.json());

    _expressApp.use(express.urlencoded({ extended: false }));

    _expressApp.use(cookieParser());

    //TODO Add morgan logger middleware

    return _expressApp;
  }
}

export default Https;
