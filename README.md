# MEANies

WHAT IS DONE:
 - QUESTIONS:
    ON CLICK:
        - PC moves directly to question
        - Pop-up window appears on screen with correct question
        - Pop-up window disappears on click whether or not its been answered
        - If player attempts to go out or order, pop-up appears that lets them know they can't do that.
        - Close pop-up after successful answer
 - USERS:
    - Create User working
        - Passwords are hashed and salted
    - Progress is saved
-header
 - After question is answered, modify answered div to indicate completion (gray-out, add check mark, etc.)
winner html
 - USERS:
    - Must get User Progress

 - BOSS FIGHT ENCOUNTER
     - Redirect after success back to game board

WHAT NEEDS DOIN:

push to aws
big boss design/execution and after victory redirect to winner.html
board/question layout





WISHLIST:
skin options for user to create themselves
upload photo
cheat codes
penalty for missing a question
kid db


END PRODUCT:
MEANies.com = '/'
    - Has a working login field
        - On successful login, redirects to game page ('/board'), with Player Character automatically moved to current "progress" div.
            Or redirects to boss if applicable.
    - Has a "Create User" button that redirects to Create User page
        - On successful creation, redirects to game page ('/board'), with Player Character at start of path.
    - Player Character moves through questions in order, then has a "Boss Fight" consisting of more questions.
    - Upon defeating a boss, a specific back-end event is fired, such as an email, a text, or a payment process.
    - On defeating final boss, player receives a text ('Congratulations!') and an email ('Congratulations!').
        - On success, redirect to 'Congratulations!' page