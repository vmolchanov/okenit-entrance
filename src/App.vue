<template>
    <div class="container">
        <router-view/>
    </div>
</template>

<style lang="scss">
    $desktop: 1200px;
    $tablet: 768px;
    $mobile: 480px;
    $mobile-xs: 320px;

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Arial', sans-serif;
        font-size: 16px;
    }

    .container {
        width: $desktop;
        margin-left: auto;
        margin-right: auto;

        @media (max-width: $desktop) {
            width: $tablet;
        }

        @media (max-width: $tablet) {
            width: $mobile;
        }

        @media (max-width: $mobile) {
            width: $mobile-xs;
        }
    }

    .visually-hidden {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
    }
</style>
