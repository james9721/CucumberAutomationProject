$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/scenarioBlue.feature");
formatter.feature({
  "line": 2,
  "name": "Set SkyBlue background functionality validation",
  "description": "",
  "id": "set-skyblue-background-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SetBlueFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User Should see background change to Sky Blue when clicked",
  "description": "",
  "id": "set-skyblue-background-functionality-validation;user-should-see-background-change-to-sky-blue-when-clicked",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "\"\u003ccolor\u003e\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the \"\u003cbutton\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the background color will change to \"\u003cbgColor\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 12,
      "value": "#@Scenario1"
    },
    {
      "line": 13,
      "value": "#Scenario: User should see background change to White when clicked"
    },
    {
      "line": 14,
      "value": "#Given \"\u003ccolor\u003e\" button exists"
    },
    {
      "line": 15,
      "value": "#When I click on the \"\u003cbutton\u003e\""
    },
    {
      "line": 16,
      "value": "#Then the background color will change to white"
    }
  ],
  "line": 18,
  "name": "",
  "description": "",
  "id": "set-skyblue-background-functionality-validation;user-should-see-background-change-to-sky-blue-when-clicked;",
  "rows": [
    {
      "cells": [
        "color",
        "button",
        "bgColor"
      ],
      "line": 19,
      "id": "set-skyblue-background-functionality-validation;user-should-see-background-change-to-sky-blue-when-clicked;;1"
    },
    {
      "cells": [
        "skyblue",
        "skyblue",
        "skyblue"
      ],
      "line": 20,
      "id": "set-skyblue-background-functionality-validation;user-should-see-background-change-to-sky-blue-when-clicked;;2"
    },
    {
      "cells": [
        "white",
        "white",
        "white"
      ],
      "line": 21,
      "id": "set-skyblue-background-functionality-validation;user-should-see-background-change-to-sky-blue-when-clicked;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2047734900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User Should see background change to Sky Blue when clicked",
  "description": "",
  "id": "set-skyblue-background-functionality-validation;user-should-see-background-change-to-sky-blue-when-clicked;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@SetBlueFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "\"skyblue\" button exists",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the \"skyblue\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the background color will change to \"skyblue\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "skyblue",
      "offset": 1
    }
  ],
  "location": "ChangeColorSteps.set_button_exists(String)"
});
formatter.result({
  "duration": 116061400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skyblue",
      "offset": 16
    }
  ],
  "location": "ChangeColorSteps.clickButton(String)"
});
formatter.result({
  "duration": 37320200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skyblue",
      "offset": 37
    }
  ],
  "location": "ChangeColorSteps.the_background_color_will_change_to_sky_blue(String)"
});
formatter.result({
  "duration": 35564700,
  "status": "passed"
});
formatter.after({
  "duration": 16778862700,
  "status": "passed"
});
formatter.before({
  "duration": 1453643900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User Should see background change to Sky Blue when clicked",
  "description": "",
  "id": "set-skyblue-background-functionality-validation;user-should-see-background-change-to-sky-blue-when-clicked;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@SetBlueFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "\"white\" button exists",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the \"white\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the background color will change to \"white\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "white",
      "offset": 1
    }
  ],
  "location": "ChangeColorSteps.set_button_exists(String)"
});
formatter.result({
  "duration": 42891500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "white",
      "offset": 16
    }
  ],
  "location": "ChangeColorSteps.clickButton(String)"
});
formatter.result({
  "duration": 36058300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "white",
      "offset": 37
    }
  ],
  "location": "ChangeColorSteps.the_background_color_will_change_to_sky_blue(String)"
});
formatter.result({
  "duration": 34128600,
  "status": "passed"
});
formatter.after({
  "duration": 694817100,
  "status": "passed"
});
});