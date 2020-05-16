## ToDo App using Javascript

This application is built using minimal javascript(es6+) and little bit HTML. Currently it is under progress and a basic version is built. The application has the following

1. Input field to add todo task
2. Create button to create the task and insert it to the DOM
3. Delete button to delete the task

## Concepts

- Event Bubbling
- Insert Adjacent HTML

## Architecture

The whole app runs around adding the task to the list container and deleting that particular task when the **delete** button is hit. As the application progresses and many todo items are added, it would be difficult to identify from which particular todo element the delete action is triggered. Here comes the concept of event bubbling to rescue, I attached the event listener to the whole **ToDo** list where all the tasks are hold and identify if the **click** event triggered was from the delete button using [**_originalTarget_**](https://developer.mozilla.org/en-US/docs/Web/API/Event/originalTarget). Delete the original target i.e. the whole **li** element if it's triggered.
