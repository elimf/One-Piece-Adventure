<template>
   <nav class=" bg-amber-400 flex justify-center">
        <ul class="navbar-menu">
            <li><a >Game</a></li>
            <li><a >Personnages</a></li>
            <li><a >Crew</a></li>
            <li><a >Statistiques </a></li>
            <li><a >Logout </a></li>
        </ul>
    </nav>
    <div>
        <h1>Content here</h1>
    </div>
</template>
<style scoped>
.navbar-menu {
    list-style: none;
    float: right;
    margin: 0;
    padding: 0;
}

.navbar-menu li {
    display: inline;
    margin-left: 20px;
}

.navbar-menu li a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
}

.navbar-menu li a:hover {
    text-decoration: underline;
}
</style>