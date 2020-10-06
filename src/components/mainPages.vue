<template>
    <div @wheel="onwheel">
        <page-aside/>
        <div class="bg-green">
            <div class="page container-fluid">
                <div class="page-main" ref="headerSlider">
                    <b-row>
                        <b-col cols="12">
                            <b-navbar variant="faded" toggleable="lg" type="light">
                                <b-navbar-brand href="/">
                                    <img src="/img/icon/icon-logo.svg" alt="Klever studio">
                                    <img src="/img/icon/icon-studio.svg" alt="Klever studio">
                                </b-navbar-brand>

                                <b-navbar-toggle target="nav-collapse"/>

                                <b-collapse id="nav-collapse" is-nav>
                                    <b-navbar-nav class="ml-auto">
                                        <b-nav-item-dropdown text="Услуги">
                                            <b-dropdown-item href="#">Производство полиграфии</b-dropdown-item>
                                            <b-dropdown-item href="#">Рекламные конструкции</b-dropdown-item>
                                            <b-dropdown-item href="#">Сувенирная продукция</b-dropdown-item>
                                            <b-dropdown-item href="#">Сувенирная продукция</b-dropdown-item>
                                        </b-nav-item-dropdown>
                                        <b-nav-item href="#">Агентство</b-nav-item>
                                        <b-nav-item href="#">Контакты</b-nav-item>
                                        <b-nav-item href="#">Блог</b-nav-item>
                                    </b-navbar-nav>
                                    <b-navbar-nav>
                                        <b-nav-item href="#">Обратная связь</b-nav-item>
                                    </b-navbar-nav>
                                </b-collapse>
                            </b-navbar>
                        </b-col>
                        <b-col cols="12">
                            <div class="social">
                                <div class="social-item">
                                    <a href="#" target="_blank" referrerpolicy="no-referrer">
                                        <i class="icon inst"/>
                                    </a>
                                </div>
                                <div class="social-item">
                                    <a href="#" target="_blank" referrerpolicy="no-referrer">
                                        <i class="icon vk"/>
                                    </a>
                                </div>
                                <div class="social-item">
                                    <a href="#" target="_blank" referrerpolicy="no-referrer">
                                        <i class="icon fb"/>
                                    </a>
                                </div>
                            </div>
                            <swiper ref="mySwiper"
                                    :options="swiperOptions"
                                    @slideChange="sliderClicked"

                            >
                                <swiper-slide class="page-item item_1">
                                    <div class="slide-menu">
                                        <a href="#" class="slide-menu-item">
                                            <div class="d-flex circle circle-white circle-90">
                                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M23.8826 23.3927C23.8826 23.9264 32.2194 26.3589 32.2194 30.737C32.2194 32.8607 30.3424 34.0113 28.1368 34.0113L26.784 33.9755C26.2357 33.9521 26.2109 33.9397 25.9429 34.2369C24.931 35.3874 23.7125 36.776 21.9209 36.8234C20.6535 36.8592 19.6175 36.0875 19.1787 35.2217C18.7765 34.415 18.4837 32.7184 18.4837 31.5079C18.2523 31.6744 17.1914 33.2878 16.887 33.6674C16.6307 33.9879 15.0713 35.3881 15.0713 35.6254C15.0713 38.2003 18.1179 40.324 20.763 40.324H21.1653C22.9204 40.324 24.6507 39.375 25.6385 38.6033C26.3452 38.0455 26.9672 37.2271 27.1863 37.0607C28.1368 36.3131 31.5857 37.6542 34.3403 34.8778C35.2303 33.9879 36.3999 32.4577 36.3999 30.7012V30.4523C36.3999 27.7825 33.8286 25.2317 32.2194 24.0928C31.2076 23.381 26.5401 20.5331 25.199 20.5331C24.6383 20.5338 23.8826 22.705 23.8826 23.3927Z"
                                                          fill="#F000FE"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M10.1476 36.0648H10.7324C14.0112 36.0648 16.3511 32.7073 17.6791 30.6311C18.496 29.3382 19.873 27.048 20.2628 25.482C20.4337 24.7819 20.3724 24.7819 19.873 24.4972C19.4707 24.2716 18.1792 23.6547 17.6061 23.6547C17.1673 23.6547 14.2302 31.9598 10.4031 31.9598H9.78179C8.23401 31.9598 7.0031 30.204 6.91768 28.614C6.89358 28.0445 6.91768 27.7123 6.91768 27.1429C6.91768 26.5618 7.1002 26.1106 6.75925 25.7901C6.27156 25.3389 5.58893 24.7345 5.18665 24.2475C4.16308 22.978 3.49286 21.4828 4.65004 19.7387C5.05232 19.1218 5.77145 18.7539 6.6125 18.5882C7.05128 18.4933 9.18385 18.3151 9.37951 18.2202C9.15976 17.8997 7.6003 16.8441 7.17321 16.5353C6.576 16.0965 5.77145 14.8386 4.9669 14.8386C3.99224 14.8386 2.63867 15.8592 2.1758 16.4163C-0.334953 19.4299 0.249842 23.4518 2.72409 25.8726C3.10154 26.2522 3.46731 26.537 3.80899 26.9757C4.18644 27.4743 4.08934 28.0788 4.08934 28.9096C4.08934 30.4398 4.4062 31.4487 4.91798 32.481C5.7605 34.1426 7.69814 36.0648 10.1476 36.0648Z"
                                                          fill="#F000FE"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M20.7637 15.5742C20.7637 16.1794 22.7743 16.9745 23.6278 16.9745C24.1155 16.9745 26.7357 8.66941 30.8921 8.66941H31.2214C32.3552 8.66941 33.2809 9.64256 33.7197 10.366C34.4023 11.529 34.195 12.976 34.195 14.6609C34.195 14.8865 37.0591 16.6897 37.0591 18.9916C37.0591 20.2371 36.3159 21.2694 35.4748 21.6964C34.6703 22.1001 33.0371 22.4199 31.8792 22.444C31.9157 22.8003 34.195 24.1764 34.9871 24.959C35.158 25.1372 35.7427 25.8606 35.9618 25.8606C36.4495 25.8606 37.4241 25.362 37.7658 25.1722C39.326 24.2706 40.5569 22.3367 40.5569 20.3553V19.7976C40.5569 18.2199 39.8254 16.7365 39.18 15.7757C38.7901 15.1946 38.4002 14.8026 37.9125 14.3163C37.0963 13.498 37.1328 13.8652 37.1328 12.4533C37.1328 10.1514 36.4867 8.21751 35.439 6.95963C34.452 5.78498 32.7574 4.5271 30.6373 4.5271C27.8951 4.5271 25.4574 6.98299 24.3243 8.67963C23.6519 9.69002 20.7637 14.3528 20.7637 15.5742Z"
                                                          fill="#F000FE"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M15.7662 20.0946C16.4853 20.0946 17.2286 18.2198 17.2286 17.3423C17.2286 17.1284 15.0588 16.0844 14.7302 15.9187C13.7921 15.4558 13.0481 15.0879 12.2195 14.4951C11.074 13.6643 8.85526 11.8019 8.85526 9.96292V9.73734C8.85526 8.79995 9.63499 7.85089 10.1957 7.43549C12.1216 6.00021 14.547 7.00841 15.0223 6.56965C16.1188 5.57313 17.3505 3.82904 18.9224 3.82904H19.3611C20.6161 3.82904 21.5426 4.61238 21.9938 5.46654C22.3596 6.15498 22.6275 8.05311 22.6275 9.12117C22.859 8.95472 24.041 7.27049 24.3213 6.91423C24.7601 6.33311 26.0034 5.51399 26.0034 4.70729C26.0034 3.99549 25.2113 2.77338 24.8579 2.33462C24.3585 1.72941 23.6146 1.17165 22.8349 0.839478C20.8972 -0.003001 18.7887 0.258357 17.0825 1.11252C15.986 1.67028 14.9135 2.48866 14.0841 3.40269C13.5599 3.98381 13.6577 3.73486 12.7554 3.75895C10.3541 3.8064 8.68442 4.32839 7.28267 5.37236C6.01524 6.32143 4.91793 7.82825 4.78433 9.9162C4.55289 13.4518 8.23323 16.3465 10.8907 17.8774C11.6106 18.2797 14.9741 20.0946 15.7662 20.0946Z"
                                                          fill="#F000FE"/>
                                                </svg>
                                            </div>
                                            <div class="text">
                                                Производство<br> полиграфии
                                            </div>
                                        </a>
                                        <a href="#" class="slide-menu-item">
                                            <div class="d-flex circle circle-white circle-90">
                                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M23.991 23.3927C23.991 23.9264 32.3278 26.3589 32.3278 30.737C32.3278 32.8607 30.4508 34.0113 28.2452 34.0113L26.8924 33.9755C26.3441 33.9521 26.3193 33.9397 26.0513 34.2369C25.0394 35.3874 23.8209 36.776 22.0293 36.8234C20.7619 36.8592 19.7259 36.0875 19.2871 35.2217C18.8849 34.415 18.5921 32.7184 18.5921 31.5079C18.3607 31.6744 17.2998 33.2878 16.9954 33.6674C16.7391 33.9879 15.1797 35.3881 15.1797 35.6254C15.1797 38.2003 18.2263 40.324 20.8714 40.324H21.2737C23.0288 40.324 24.7591 39.375 25.7469 38.6033C26.4536 38.0455 27.0756 37.2271 27.2947 37.0607C28.2452 36.3131 31.6941 37.6542 34.4487 34.8778C35.3387 33.9879 36.5083 32.4577 36.5083 30.7012V30.4523C36.5083 27.7825 33.9369 25.2317 32.3278 24.0928C31.316 23.381 26.6485 20.5331 25.3074 20.5331C24.7467 20.5338 23.991 22.705 23.991 23.3927Z"
                                                          fill="#010BFF"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M10.256 36.0648H10.8408C14.1195 36.0648 16.4595 32.7073 17.7875 30.6311C18.6044 29.3382 19.9814 27.048 20.3712 25.482C20.5421 24.7819 20.4808 24.7819 19.9814 24.4972C19.5791 24.2716 18.2876 23.6547 17.7145 23.6547C17.2757 23.6547 14.3386 31.9598 10.5115 31.9598H9.89019C8.34241 31.9598 7.1115 30.204 7.02608 28.614C7.00198 28.0445 7.02608 27.7123 7.02608 27.1429C7.02608 26.5618 7.2086 26.1106 6.86765 25.7901C6.37995 25.3389 5.69733 24.7345 5.29505 24.2475C4.27148 22.978 3.60126 21.4828 4.75844 19.7387C5.16072 19.1218 5.87985 18.7539 6.7209 18.5882C7.15968 18.4933 9.29225 18.3151 9.48791 18.2202C9.26816 17.8997 7.7087 16.8441 7.2816 16.5353C6.6844 16.0965 5.87985 14.8386 5.0753 14.8386C4.10064 14.8386 2.74707 15.8592 2.2842 16.4163C-0.226555 19.4299 0.358241 23.4518 2.83249 25.8726C3.20994 26.2522 3.57571 26.537 3.91739 26.9757C4.29484 27.4743 4.19774 28.0788 4.19774 28.9096C4.19774 30.4398 4.5146 31.4487 5.02638 32.481C5.8689 34.1426 7.80653 36.0648 10.256 36.0648Z"
                                                          fill="#161A25"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M20.8721 15.5742C20.8721 16.1794 22.8827 16.9745 23.7362 16.9745C24.2239 16.9745 26.8441 8.66941 31.0005 8.66941H31.3298C32.4636 8.66941 33.3893 9.64256 33.8281 10.366C34.5107 11.529 34.3034 12.976 34.3034 14.6609C34.3034 14.8865 37.1675 16.6897 37.1675 18.9916C37.1675 20.2371 36.4243 21.2694 35.5832 21.6964C34.7787 22.1001 33.1455 22.4199 31.9876 22.444C32.0241 22.8003 34.3034 24.1764 35.0955 24.959C35.2664 25.1372 35.8511 25.8606 36.0702 25.8606C36.5579 25.8606 37.5325 25.362 37.8742 25.1722C39.4344 24.2706 40.6653 22.3367 40.6653 20.3553V19.7976C40.6653 18.2199 39.9338 16.7365 39.2884 15.7757C38.8985 15.1946 38.5086 14.8026 38.0209 14.3163C37.2047 13.498 37.2412 13.8652 37.2412 12.4533C37.2412 10.1514 36.5951 8.21751 35.5474 6.95963C34.5604 5.78498 32.8658 4.5271 30.7457 4.5271C28.0035 4.5271 25.5658 6.98299 24.4327 8.67963C23.7603 9.69002 20.8721 14.3528 20.8721 15.5742Z"
                                                          fill="#161A25"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M15.8746 20.0946C16.5937 20.0946 17.337 18.2198 17.337 17.3423C17.337 17.1284 15.1672 16.0844 14.8386 15.9187C13.9005 15.4558 13.1565 15.0879 12.3279 14.4951C11.1824 13.6643 8.96366 11.8019 8.96366 9.96292V9.73734C8.96366 8.79995 9.74339 7.85089 10.3041 7.43549C12.23 6.00021 14.6554 7.00841 15.1307 6.56965C16.2272 5.57313 17.4589 3.82904 19.0308 3.82904H19.4695C20.7245 3.82904 21.651 4.61238 22.1022 5.46654C22.468 6.15498 22.7359 8.05311 22.7359 9.12117C22.9674 8.95472 24.1494 7.27049 24.4297 6.91423C24.8685 6.33311 26.1118 5.51399 26.1118 4.70729C26.1118 3.99549 25.3197 2.77338 24.9663 2.33462C24.4669 1.72941 23.723 1.17165 22.9433 0.839478C21.0056 -0.003001 18.8971 0.258357 17.1909 1.11252C16.0944 1.67028 15.0219 2.48866 14.1925 3.40269C13.6683 3.98381 13.7661 3.73486 12.8638 3.75895C10.4625 3.8064 8.79282 4.32839 7.39106 5.37236C6.12364 6.32143 5.02633 7.82825 4.89273 9.9162C4.66129 13.4518 8.34163 16.3465 10.9991 17.8774C11.719 18.2797 15.0825 20.0946 15.8746 20.0946Z"
                                                          fill="#161A25"/>
                                                </svg>
                                            </div>
                                            <div class="text">
                                                Рекламные<br> конструкции
                                            </div>
                                        </a>
                                        <a href="#" class="slide-menu-item">
                                            <div class="d-flex circle circle-white circle-90">
                                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M24.1082 23.3927C24.1082 23.9264 32.445 26.3589 32.445 30.737C32.445 32.8607 30.568 34.0113 28.3624 34.0113L27.0096 33.9755C26.4613 33.9521 26.4365 33.9397 26.1685 34.2369C25.1566 35.3874 23.9381 36.776 22.1465 36.8234C20.8791 36.8592 19.8431 36.0875 19.4043 35.2217C19.002 34.415 18.7093 32.7184 18.7093 31.5079C18.4778 31.6744 17.417 33.2878 17.1126 33.6674C16.8563 33.9879 15.2969 35.3881 15.2969 35.6254C15.2969 38.2003 18.3435 40.324 20.9886 40.324H21.3909C23.146 40.324 24.8763 39.375 25.8641 38.6033C26.5708 38.0455 27.1928 37.2271 27.4119 37.0607C28.3624 36.3131 31.8113 37.6542 34.5659 34.8778C35.4559 33.9879 36.6255 32.4577 36.6255 30.7012V30.4523C36.6255 27.7825 34.0541 25.2317 32.445 24.0928C31.4331 23.381 26.7657 20.5331 25.4246 20.5331C24.8639 20.5338 24.1082 22.705 24.1082 23.3927Z"
                                                          fill="#161A25"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M10.3731 36.0648H10.9579C14.2367 36.0648 16.5766 32.7073 17.9047 30.6311C18.7216 29.3382 20.0986 27.048 20.4884 25.482C20.6593 24.7819 20.5979 24.7819 20.0986 24.4972C19.6963 24.2716 18.4048 23.6547 17.8317 23.6547C17.3929 23.6547 14.4558 31.9598 10.6287 31.9598H10.0074C8.4596 31.9598 7.22868 30.204 7.14326 28.614C7.11917 28.0445 7.14326 27.7123 7.14326 27.1429C7.14326 26.5618 7.32578 26.1106 6.98484 25.7901C6.49714 25.3389 5.81452 24.7345 5.41224 24.2475C4.38867 22.978 3.71845 21.4828 4.87563 19.7387C5.2779 19.1218 5.99704 18.7539 6.83809 18.5882C7.27687 18.4933 9.40944 18.3151 9.6051 18.2202C9.38534 17.8997 7.82589 16.8441 7.39879 16.5353C6.80159 16.0965 5.99704 14.8386 5.19249 14.8386C4.21783 14.8386 2.86426 15.8592 2.40138 16.4163C-0.109367 19.4299 0.475428 23.4518 2.94967 25.8726C3.32713 26.2522 3.6929 26.537 4.03458 26.9757C4.41203 27.4743 4.31493 28.0788 4.31493 28.9096C4.31493 30.4398 4.63178 31.4487 5.14357 32.481C5.98608 34.1426 7.92372 36.0648 10.3731 36.0648Z"
                                                          fill="#161A25"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M20.9893 15.5742C20.9893 16.1794 22.9999 16.9745 23.8534 16.9745C24.3411 16.9745 26.9613 8.66941 31.1177 8.66941H31.4469C32.5808 8.66941 33.5065 9.64256 33.9453 10.366C34.6279 11.529 34.4206 12.976 34.4206 14.6609C34.4206 14.8865 37.2847 16.6897 37.2847 18.9916C37.2847 20.2371 36.5414 21.2694 35.7004 21.6964C34.8958 22.1001 33.2627 22.4199 32.1047 22.444C32.1412 22.8003 34.4206 24.1764 35.2127 24.959C35.3835 25.1372 35.9683 25.8606 36.1874 25.8606C36.6751 25.8606 37.6497 25.362 37.9914 25.1722C39.5516 24.2706 40.7825 22.3367 40.7825 20.3553V19.7976C40.7825 18.2199 40.0509 16.7365 39.4056 15.7757C39.0157 15.1946 38.6258 14.8026 38.1381 14.3163C37.3219 13.498 37.3584 13.8652 37.3584 12.4533C37.3584 10.1514 36.7123 8.21751 35.6646 6.95963C34.6776 5.78498 32.983 4.5271 30.8629 4.5271C28.1207 4.5271 25.6829 6.98299 24.5499 8.67963C23.8775 9.69002 20.9893 14.3528 20.9893 15.5742Z"
                                                          fill="#161A25"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M15.9918 20.0946C16.7109 20.0946 17.4542 18.2198 17.4542 17.3423C17.4542 17.1284 15.2843 16.0844 14.9558 15.9187C14.0177 15.4558 13.2737 15.0879 12.4451 14.4951C11.2996 13.6643 9.08085 11.8019 9.08085 9.96292V9.73734C9.08085 8.79995 9.86057 7.85089 10.4213 7.43549C12.3472 6.00021 14.7726 7.00841 15.2478 6.56965C16.3444 5.57313 17.5761 3.82904 19.1479 3.82904H19.5867C20.8417 3.82904 21.7682 4.61238 22.2194 5.46654C22.5852 6.15498 22.8531 8.05311 22.8531 9.12117C23.0845 8.95472 24.2665 7.27049 24.5469 6.91423C24.9857 6.33311 26.229 5.51399 26.229 4.70729C26.229 3.99549 25.4369 2.77338 25.0835 2.33462C24.5841 1.72941 23.8402 1.17165 23.0604 0.839478C21.1228 -0.003001 19.0143 0.258357 17.3081 1.11252C16.2116 1.67028 15.1391 2.48866 14.3097 3.40269C13.7855 3.98381 13.8833 3.73486 12.9809 3.75895C10.5797 3.8064 8.91001 4.32839 7.50825 5.37236C6.24083 6.32143 5.14352 7.82825 5.00991 9.9162C4.77848 13.4518 8.45882 16.3465 11.1163 17.8774C11.8362 18.2797 15.1997 20.0946 15.9918 20.0946Z"
                                                          fill="#90FE00"/>
                                                </svg>
                                            </div>
                                            <div class="text">
                                                Сувенирная<br> продукция
                                            </div>
                                        </a>
                                    </div>
                                    <h1 class="my-auto">Рекламное<br> агентство</h1>
                                    <div class="slide-contact">
                                        <router-link to="/season" class="link link-page">
                                            <i class="pointer"/>
                                            Сезонные предложения
                                        </router-link>
                                        <a href="#" class="link link-mail">E: andrey@klever-studio.ru</a>
                                        <a href="#" class="link link-phone">
                                            <i class="wa"/>
                                            <i class="tg"/>
                                            T: +7 (926) 339 75 47
                                        </a>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="page-item item_2">
                                    <h1>Агентство</h1>
                                    <h4>
                                        Klever studio — агентство делающее качественную
                                        рекламную продукцию, основано в 2010 году
                                    </h4>
                                    <div class="slide-counter">
                                        <div class="slide-counter-item">
                                            <span class="nubmer">
                                                25
                                            </span><br>
                                            <span class="text">
                                                Направлений<br> деятельности
                                            </span>
                                        </div>
                                        <div class="slide-counter-item">
                                            <span class="nubmer">
                                               50
                                            </span><br>
                                            <span class="text">
                                               Партнеров<br> производств
                                            </span>
                                        </div>
                                        <div class="slide-counter-item">
                                            <span class="nubmer">
                                              35
                                            </span><br>
                                            <span class="text">
                                               Поставщиков<br> продукции
                                            </span>
                                        </div>
                                        <div class="slide-counter-item">
                                            <span class="nubmer">
                                               35 000+
                                            </span><br>
                                            <span class="text">
                                               Готовых<br> сувениров
                                            </span>
                                        </div>
                                    </div>
                                    <div class="slide-contact">
                                        <a href="#" class="link link-page">
                                            <i class="pointer"/>
                                            О работе с нами
                                        </a>
                                        <a href="#" class="link link-mail">E: andrey@klever-studio.ru</a>
                                        <a href="#" class="link link-phone">
                                            <i class="wa"/>
                                            <i class="tg"/>
                                            T: +7 (926) 339 75 47
                                        </a>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="page-item item_3">
                                    <h1>Клиенты</h1>
                                    <h4>
                                        Мы ценим наших клиентов и благодарны им за выбор работать с нами
                                    </h4>
                                    <div class="slide-client">
                                        <img class="img-fluid" src="/img/client-1.png">
                                    </div>
                                    <div class="slide-contact">
                                        <a href="#" class="link link-page">
                                            <i class="pointer"/>
                                            Портфолио
                                        </a>
                                        <a href="#" class="link link-mail">E: andrey@klever-studio.ru</a>
                                        <a href="#" class="link link-phone">
                                            <i class="wa"/>
                                            <i class="tg"/>
                                            T: +7 (926) 339 75 47
                                        </a>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="page-item item_4">
                                    <h1>Контакты</h1>
                                    <div class="slide-contact-block">
                                        <div class="contact-block-item">
                                            <div class="circle circle-white circle-80">
                                                <i class="ico ico-map m-auto"/>
                                            </div>
                                            <div class="text">
                                                Озерковская набережная 24/22 стр 2
                                            </div>
                                        </div>
                                        <a class="contact-block-item" href="tel:+79263397547">
                                            <div class="circle circle-white circle-80">
                                                <i class="ico ico-phone m-auto"/>
                                            </div>
                                            <div class="text">
                                                +7 (926) 339 75 47
                                            </div>
                                        </a>
                                    </div>
                                    <div class="slide-contact">
                                        <a href="#" class="link link-page">
                                            <i class="pointer"/>
                                            Карта
                                        </a>
                                        <a href="#" class="link link-mail">E: andrey@klever-studio.ru</a>
                                        <a href="#" class="link link-phone">
                                            <i class="wa"/>
                                            <i class="tg"/>
                                            T: +7 (926) 339 75 47
                                        </a>
                                    </div>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.min.css'

    export default {
        name: "MainScrollSlider",
        props: {
            starterSlide: {
                type: Number,
                default: 0,
            },
        },
        components: {
            Swiper,
            SwiperSlide,
            pageAside: () => import(/* webpackChunkName: "page-aside" */'./pageAside'),
        },
        data: () => {
            return {
                needForChangeRoute: true,
                xPath: [ // ссылки по горизонтали
                    {path: '/'},
                    {path: '/about'},
                    {path: '/portfolio'},
                    {path: '/contacts'}
                ],
                yPath: [ // ссылки по вертикали
                    {path: '/season'},
                    {path: '/services-polygraphy'},
                ],
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                currentSlideNum: 0,
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper; // инициализируем слайдер
            }
        },
        mounted() {
            this.needForChangeRoute = false;
            for (let i = 0; i < this.xPath.length; i++) {
                if (this.xPath[i].path === this.$route.path) { // сравниваем элемент xPath и настоящий url
                    this.swiper.slideTo(i, 0, false); // вызываем элемент слайда
                    this.currentSlideNum = i;
                }
            }
            this.needForChangeRoute = true;
        },
        methods: {
            sliderClicked() {
                const pageNum = this.swiper.realIndex; // получаем активный слайд

                if (this.needForChangeRoute) {
                    this.$router.push(this.xPath[pageNum].path); // переходим к url с таким же номером массива как pageNum
                    this.currentSlideNum = pageNum;
                }
                if (pageNum == '0') {
                    this.$refs.headerSlider.className = '';
                    this.$refs.headerSlider.classList.add('page-main');
                } else if (pageNum == '1') {
                    this.$refs.headerSlider.className = '';
                    this.$refs.headerSlider.classList.add('page-about');
                } else if (pageNum == '2') {
                    this.$refs.headerSlider.className = '';
                    this.$refs.headerSlider.classList.add('page-portfolio');
                } else if (pageNum == '3') {
                    this.$refs.headerSlider.className = '';
                    this.$refs.headerSlider.classList.add('page-contacts');
                }
            },
            onwheel(ev) {
                console.log('mainPages onWheel is started');
                const deltaY = ev.deltaY;

                switch (this.currentSlideNum) {
                    case 0:
                        if (deltaY > 0) {

                            this.$root.$emit('change-animation-direction', {
                                direction: 'bottom',
                            });

                            if (this.$route.name !== '/season') {
                                this.$router.push('/season');
                            }
                        }
                        break;
                    case 1:
                        if (deltaY > 0) {
                            if (this.$route.name !== 'about-details') {
                                this.$router.push('/about/details');
                            }
                        }
                        break;
                    case 2:
                        if (deltaY > 0) {
                            if (this.$route.name !== 'for-clients') {
                                this.$router.push('/portfolio/for-clients');
                            }
                        }
                        break;
                    case 3:
                        break;
                    default:
                        break;
                }
                console.log('mainPages onWheel is ended');
            }
        }
    }

</script>

<style lang="scss">
    @import "./src/scss/style";

    .page {
        background: url("/img/blob.png") no-repeat right 0 bottom 0;
        height: 100vh;
        overflow: hidden;
        @include _768 {
            height: 100%;
        }

        &-item {
            display: flex;
            flex-direction: column;
            width: 100vw;
            height: 100%;
            overflow-y: inherit;
            overflow-x: hidden;

            position: relative;

            & > * {
                position: relative;
                z-index: 5;
            }

        }

        &-main {
            height: 100%;
            background: url("/img/slide-1.png") no-repeat right 0 bottom 0;
        }

        &-about {
            height: 100%;
            background: url("/img/slide-2.png") no-repeat right 0 bottom 0;
        }

        &-portfolio {
            height: 100%;
            background: url("/img/slide-3.png") no-repeat right 0 bottom 0;
        }

        &-contacts {
            height: 100%;
            background: url("/img/slide-4.png") no-repeat right 0 bottom 0;
        }
    }
</style>