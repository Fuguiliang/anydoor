<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        a {
            display: block;
            margin: 10px 0 20px 20px;
        }
    </style>
</head>
<body>
    {{#each files }}
        <a href="{{../dir}}/{{this}}">{{this}}</a>
    {{/each}}    
</body>
</html>