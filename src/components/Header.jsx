import { useState } from "react";

export function Header() {
    const [count, setCount] = useState(0);

    return (
        <header>
            <div id="header">
                <div>
                    <a href="#">
                        {" "}
                        <h1>tee's blog</h1>{" "}
                    </a>
                </div>
                <nav id="nav-bar">
                    <div className="nav-link">
                        <a href="#"> home </a>
                    </div>
                    <div className="nav-link">
                        <a href="#"> about </a>
                    </div>
                    <div className="nav-link">
                        <a href="#"> contact </a>
                    </div>
                    <div className="nav-link">
                        <a href="#"> more by me </a>
                    </div>

                    <form action="" id="search-bar">
                        <input type="text" name="" id="search-input" placeholder="search" />
                        <button id="search-btn">
                            <svg width="100%" height="100%" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" id="search-icon">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.40597 2.17593C4.21905 2.17593 2.4462 3.94878 2.4462 6.13571C2.4462 8.32263 4.21905 10.0955 6.40597 10.0955C8.59289 10.0955 10.3657 8.32263 10.3657 6.13571C10.3657 3.94878 8.59289 2.17593 6.40597 2.17593ZM0.466309 6.13571C0.466309 2.85532 3.12559 0.196045 6.40597 0.196045C9.68635 0.196045 12.3456 2.85532 12.3456 6.13571C12.3456 7.4185 11.939 8.60632 11.2475 9.57728L16.0155 14.3452C16.4021 14.7318 16.4021 15.3586 16.0155 15.7452C15.6289 16.1318 15.0021 16.1318 14.6155 15.7452L9.84754 10.9773C8.87659 11.6687 7.68877 12.0754 6.40597 12.0754C3.12559 12.0754 0.466309 9.41609 0.466309 6.13571Z"
                                    fill="#9CA3AF"
                                />
                            </svg>
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    );
}
