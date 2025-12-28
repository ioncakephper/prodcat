import logger from '../src/utils/logger.js';
import kleur from 'kleur';
import { jest } from '@jest/globals';

describe('logger', () => {
  let logSpy;
  let infoSpy;
  let warnSpy;
  let errorSpy;
  let debugSpy;

  beforeEach(() => {
    // Reset verbose mode before each test to ensure isolation
    logger.setVerbose(false);

    // Spy on console methods and mock their implementation
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    infoSpy = jest.spyOn(console, 'info').mockImplementation(() => {});
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    debugSpy = jest.spyOn(console, 'debug').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore original console methods after each test
    logSpy.mockRestore();
    infoSpy.mockRestore();
    warnSpy.mockRestore();
    errorSpy.mockRestore();
    debugSpy.mockRestore();
  });

  describe('setVerbose and isVerbose', () => {
    it('should set verbose mode to true and isVerbose should return true', () => {
      logger.setVerbose(true);
      expect(logger.isVerbose()).toBe(true);
      expect(logSpy).toHaveBeenCalledWith(
        kleur.dim('Verbose logging enabled.'),
      );
    });

    it('should set verbose mode to false and isVerbose should return false', () => {
      logger.setVerbose(true); // Enable first
      logSpy.mockClear(); // Clear spy for previous call
      logger.setVerbose(false); // Then disable
      expect(logger.isVerbose()).toBe(false);
      expect(logSpy).not.toHaveBeenCalledWith(
        kleur.dim('Verbose logging enabled.'),
      );
    });
  });

  describe('log', () => {
    it('should log a single string argument to console.log', () => {
      logger.log('Hello world');
      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(logSpy).toHaveBeenCalledWith('Hello world');
    });

    it('should log multiple string arguments joined by space', () => {
      logger.log('Hello', 'world', 'from', 'logger');
      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(logSpy).toHaveBeenCalledWith('Hello world from logger');
    });

    it('should log object arguments as JSON string', () => {
      const obj = { key: 'value', num: 123 };
      logger.log('Object:', obj);
      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(logSpy).toHaveBeenCalledWith(
        'Object: ' + JSON.stringify(obj, null, 2),
      );
    });
  });

  describe('info', () => {
    it('should log a single string argument to console.info with green color', () => {
      logger.info('Information message');
      expect(infoSpy).toHaveBeenCalledTimes(1);
      expect(infoSpy).toHaveBeenCalledWith(kleur.green('Information message'));
    });

    it('should log multiple string arguments joined by space with green color', () => {
      logger.info('This is', 'an', 'info');
      expect(infoSpy).toHaveBeenCalledTimes(1);
      expect(infoSpy).toHaveBeenCalledWith(kleur.green('This is an info'));
    });

    it('should log object arguments as JSON string with green color', () => {
      const obj = { status: 'ok' };
      logger.info('Status:', obj);
      expect(infoSpy).toHaveBeenCalledTimes(1);
      expect(infoSpy).toHaveBeenCalledWith(
        kleur.green('Status: ' + JSON.stringify(obj, null, 2)),
      );
    });
  });

  describe('warn', () => {
    it('should log a single string argument to console.warn with yellow color and "Warning: " prefix', () => {
      logger.warn('This is a warning');
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenCalledWith(
        kleur.yellow('Warning: This is a warning'),
      );
    });

    it('should log object arguments as JSON string with yellow color and "Warning: " prefix', () => {
      const err = { code: 500 };
      logger.warn('Issue:', err);
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenCalledWith(
        kleur.yellow('Warning: Issue: ' + JSON.stringify(err, null, 2)),
      );
    });
  });

  describe('error', () => {
    it('should log a single string argument to console.error with red color and "Error: " prefix', () => {
      logger.error('Something went wrong');
      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(errorSpy).toHaveBeenCalledWith(
        kleur.red('Error: Something went wrong'),
      );
    });

    it('should log object arguments as JSON string with red color and "Error: " prefix', () => {
      const err = new Error('Failed');
      logger.error('Fatal:', err);
      expect(errorSpy).toHaveBeenCalledTimes(1);
      // Jest's spyOn will pass the original Error object unless stringified explicitly by joinArgs
      expect(errorSpy).toHaveBeenCalledWith(
        kleur.red('Error: Fatal: ' + JSON.stringify(err, null, 2)),
      );
    });
  });

  describe('debug', () => {
    it('should log debug message when verbose mode is enabled', () => {
      logger.setVerbose(true);
      logSpy.mockClear(); // Clear initial verbose message
      logger.debug('Debug info');
      expect(debugSpy).toHaveBeenCalledTimes(1);
      expect(debugSpy).toHaveBeenCalledWith(kleur.dim('Debug info'));
    });

    it('should log multiple debug arguments joined by space when verbose mode is enabled', () => {
      logger.setVerbose(true);
      logSpy.mockClear();
      logger.debug('Debug', 'multiple', { key: 'value' });
      expect(debugSpy).toHaveBeenCalledTimes(1);
      expect(debugSpy).toHaveBeenCalledWith(
        kleur.dim(
          'Debug multiple ' + JSON.stringify({ key: 'value' }, null, 2),
        ),
      );
    });

    it('should not log debug message when verbose mode is disabled', () => {
      logger.setVerbose(false); // Already false, but explicit
      logSpy.mockClear();
      logger.debug('Debug info');
      expect(debugSpy).not.toHaveBeenCalled();
    });

    it('should not log debug message by default (verbose mode is false)', () => {
      // verbose is false from beforeEach
      logger.debug('Debug info');
      expect(debugSpy).not.toHaveBeenCalled();
    });
  });
});
