Components
----------

**src\App.jsx**

### 1. App

This is the main component of the application, it will be responsible for containing the other components.   




-----
**src\components\Atoms\Button\Button.jsx**

### 1. Button

This is an react component that that represents a button.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
text|string|yes||
onClick|func|no||
theme|string|no||
-----
**src\components\Atoms\Input\Input.jsx**

### 1. InputForm

This is an react component that that represents a personalized input for the forms, etc.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|string|no||
label|string|no||
minLength|number|no||
id|string|no||
type|string|no||
name|string|no||
placeholder|string|no||
required|bool|no||
defaultValue|string|no||
autoComplete|bool|no||
value|string|no||
theme|string|no||
-----
**src\components\Atoms\Input\SubmitForm.jsx**

### 1. SubmitForm

This is an react component that that represents an input of type submit for the forms.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
theme|string|no||
text|string|yes||
disabled|bool|no||
-----
**src\components\Atoms\Loader\Loader.jsx**

### 1. Loader

This is a react component that represents a spinner to show while loading external resources.   




-----
**src\components\Atoms\Textarea\Textarea.jsx**

### 1. Textarea

This is a react component that represents a text field for writing long paragraphs.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|string|no||
label|string|no||
minLength|number|no||
id|string|yes||
type|string|no||
name|string|yes||
placeholder|string|no||
required|bool|no||
defaultValue|string|no||
autoComplete|bool|no||
value|string|no||
theme|string|no||
-----
**src\components\Molecules\FormSearch\FormSearch.jsx**

### 1. FormSearch

This component is responsible for dispatching the value of an input with the name of a user to be searched in the github API.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
handleOnSearch|func|yes||
-----
**src\components\Molecules\Header\Header.jsx**

### 1. Header

This component will be displayed on all pages of the application, it is useful to navigate to the main page and to authenticate the user.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
handleOnRedirect|func|yes||
handleOnLogout|func|yes||
auth|object|yes||
-----
**src\components\Organisms\Modal\Modal.jsx**

### 1. Modal

This component will be useful to open windows and display a message or certain information to the user that stands out with respect to the content of the application.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
show|bool|yes||
closeModal|func|yes||
children|element|yes||
-----
**src\components\Organisms\NewPost\NewPost.jsx**

### 1. NewPost

This component is responsible for creating and updating the posts.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
handleOnCreatePost|func|no||
handleOnUpdatePost|func|no||
auth|object|yes||
update|bool|no||
postToUpdate|object|no||
-----
**src\components\Organisms\Post\Post.jsx**

### 1. Post

This component is responsible for creating and updating the posts.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
post|object|yes||
large|bool|no||
auth|object|yes||
ui|object|no||
handleOnShowModal|func|yes||
-----
**src\components\Pages\Blog.jsx**

### 1. Blog

This page or component will be responsible for showing the post creation form, in addition to the search input and the list of posts found.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
posts|array|no||
-----
**src\components\Pages\Error404.jsx**

### 1. Error404

This component will be responsible for displaying the view with error message by route not found.   




-----
**src\components\Pages\Home.jsx**

### 1. Home

This component is displayed when the user is not authenticated, you can only search for the posts by a username.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
getToken|func|yes||
-----
**src\components\Pages\PostDetail.jsx**

### 1. PostDetail

This component is responsible for displaying the full details of any publication, in addition to the possibility of browsing to subsequent publications associated with the same searched user.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
match|object|yes||
posts|object|no||
-----
**src\components\Templates\Posts\Posts.jsx**

### 1. Posts

This component is responsible for displaying the list of summarized publications of a particular user.   




-----
**src\components\Utils\Routes.jsx**

### 1. Routes

In this component the different routes that the application has are defined.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
authed|bool|yes||
-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
