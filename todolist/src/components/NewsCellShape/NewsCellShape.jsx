import React from 'react';
import bgimage from './avatar.jpeg';

const NewsCellShape = () => {
    return (
        <div className="news news__cell-shape p-4">
            <div className="news__cell-background">
                <div className="news__cell-background-image position-relative" style={{backgroundImage: `url(${bgimage})`}}>
                    {/* <div className="news__cell-shadow"></div> */}
                </div>
            </div>
            <div className="news__cell-title">
                <a href="#" className="text-white stretched-link">
                    В МВД рассказали о сроках и плюсах добровольной сдачи нелегального арсенала
                </a>
            </div>
            <div className="news__cell-info">
                <ul className="col-8 news__cell-info__date">
					<li className="nav-item">
                        Вчера,&nbsp;15:05
                    </li>
					<li className="nav-item">
                        <i className="bi bi-eye"></i>
                        72
                    </li>
				</ul>
				<ul className="col-4 news__cell-info__share">
                    <li class="nav-item d-none d-lg-block">
						<div class="nav-link">
							<a href="http://www.facebook.com/sharer.php?u=http://localhost:8000/minskaypravda/26.01.2022/v-mvd-rasskazali-o-srokah-i-plyusah-dobrovolnoj-sdachi-nelegalnogo-arsenala/" data-name="facebook">
                                <svg class="svg-icon">
                                    <use href="#social-facebook"></use>
                                </svg>
                            </a>
						</div>
					</li>
					<li class="nav-item d-none d-lg-block">
						<div class="nav-link">
                            <a href="http://www.facebook.com/sharer.php?u=http://localhost:8000/minskaypravda/26.01.2022/v-mvd-rasskazali-o-srokah-i-plyusah-dobrovolnoj-sdachi-nelegalnogo-arsenala/" data-name="vkontakte">
                                <svg class="svg-icon">
                                    <use href="#social-vkontakte"></use>
                                </svg>
                            </a>
						</div>
					</li>
					<li class="nav-item d-none d-lg-block">
						<div class="nav-link">
                            <a href="http://www.facebook.com/sharer.php?u=http://localhost:8000/minskaypravda/26.01.2022/v-mvd-rasskazali-o-srokah-i-plyusah-dobrovolnoj-sdachi-nelegalnogo-arsenala/" data-name="odnoklassniki">
                                <svg class="svg-icon">
                                    <use href="#social-odnoklassniki"></use>
                                </svg>
                            </a>
						</div>
					</li>
                    <li class="nav-item">
						<div class="nav-link">
                            <a class="share__more">
                                <span class="share__more-desktop d-none d-lg-block">
                                    <svg class="svg-icon">
                                        <use href="#icon-more"></use>
                                    </svg>
                                </span>
                                <span class="share__more-mobile d-block d-lg-none">
                                    <svg class="svg-icon">
                                        <use href="#icon-share"></use>
                                    </svg>
                                </span>
                            </a>
						</div>
					</li>
				</ul>
            </div>
        </div>
    );
};

export default NewsCellShape;