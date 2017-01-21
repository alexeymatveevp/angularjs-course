import {browser, element, by} from 'protractor';
import * as fs from 'fs';

describe('angular2-sandbox App', function () {

  beforeEach(() => {
    browser.get('/');
  });

  jasmine.getEnv().addReporter({
    specDone: function (result) {
      if (result.status === 'failed') {
        takeScreenShot(result.fullName + '.png');
      }
    }
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Angular2Sandbox');
  });

  it('should create new notebook', () => {
    let newNotebookName = 'Some test notebook';

    element(by.id('showCreateNotebookDialog-btn')).click();

    element(by.id('newNotebookName-txt')).sendKeys(newNotebookName);

    element(by.id('createNotebook-btn')).click();

    expect(element(by.css('.md-tab-list')).getText()).toContain(newNotebookName);
  });

  it('should click by predefined notebook and add new note', () => {
    element(by.id('triggerMenu-btn')).click();
    element(by.id('showCreateNoteDialog-btn')).click();

    let title = 'test title';
    let text = 'this is some test note';
    element(by.css('app-note-dialog input')).sendKeys(title);
    element(by.css('app-note-dialog textarea')).sendKeys(text);

    element(by.id('saveAndClose-btn')).click();

    expect(element(by.id('note-tbl')).getText()).toContain(title);
  });
});

function takeScreenShot(fileName: string) {
  browser.takeScreenshot().then(function (png) {
    let stream = fs.createWriteStream(fileName);

    stream.write(new Buffer(png, 'base64'));
    stream.end();
  });
}
