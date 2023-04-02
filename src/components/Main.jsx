import React from 'react'
import '../styles/App.css';



function Main() {



    return (
        <main className='main' >


            <div className='about' id='main'>



                <div className="about-box">
                    <img className='about-img' src={require('../assets/team.png')} alt="" />
                    <div className="about-text">
                        <div className='about-header-text'>
                            Кто мы
                        </div>
                        Lorem ipsum dolor sit amets, consectetur adipisicing elit. Quod, minus officiis alias cum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempora soluta minima nostrum, deleniti.
                    </div>
                </div>

                <div className="about-box">
                    <img className='about-img' src={require('../assets/technology.png')} alt="" />
                    <div className="about-text">
                        <div className='about-header-text'>
                            Чем занимаемся
                        </div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti dolor aliquid esse hic accusamus! Laborum, commodi optio aspernatur deleniti unde pariatur debitis autem error vitae voluptatum, maxime ipsum. Maxime, sint!
                    </div>
                </div>

                <div className="about-box">
                    <img className='about-img' src={require('../assets/research.png')} alt="" />
                    <div className="about-text">
                        <div className='about-header-text'>
                            На кого нацелены
                        </div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tempora praesentium ullam harum, impedit nesciunt, error nemo nisi rem non saepe laudantium, aut ipsam explicabo maxime repudiandae ratione minus delectus.
                    </div>
                </div>

                <div className="about-box">
                    <img className='about-img' src={require('../assets/release.png')} alt="" />
                    <div className="about-text">
                        <div className='about-header-text'>
                            Результат, к которому мы стремимся
                        </div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tempora praesentium ullam harum, impedit nesciunt, error nemo nisi rem non saepe laudantium, aut ipsam explicabo maxime repudiandae ratione minus delectus.
                    </div>
                </div>
            </div>



            <div className="big-text" id='team'>
                Команда
            </div>


            <div className="team" >

                <div className="team-box">
                    <img className='team-img' src={require('../assets/face_main.png')} alt="" />
                    <div className="name">
                        Сюзанна
                    </div>
                    <div className="role">
                        Team Lead
                    </div>
                    <a className='link' href="https://vk.com/susan1396">@linklink</a>
                </div>

                <div className="team-box">
                    <img className='team-img' src={require('../assets/face_main.png')} alt="" />
                    <div className="name">
                        Алексей
                    </div>
                    <div className="role">
                        Role
                    </div>
                    <a className='link' href="https://vk.com/jsfrocha">@linklink</a>
                </div>

                <div className="team-box">
                    <img className='team-img' src={require('../assets/face_main.png')} alt="" />
                    <div className="name">
                        Сергей
                    </div>
                    <div className="role">
                        Role
                    </div>
                    <a className='link' href="https://vk.com/lyoha784">@linklink</a>
                </div>

                <div className="team-box">
                    <img className='team-img' src={require('../assets/face_main.png')} alt="" />
                    <div className="name">
                        Елисей
                    </div>
                    <div className="role">
                        Role
                    </div>
                    <a className='link' href="https://vk.com/elishaflacon">@linklink</a>
                </div>

                <div className="team-box">
                    <img className='team-img' src={require('../assets/face_main.png')} alt="" />
                    <div className="name">
                        Юлия
                    </div>
                    <div className="role">
                        Role
                    </div>
                    <a className='link' href="https://vk.com/happy_dessah">@linklink</a>
                </div>

                <div className="team-box">
                    <img className='team-img' src={require('../assets/face_main.png')} alt="" />
                    <div className="name">
                        Мария
                    </div>
                    <div className="role">
                        Role
                    </div>
                    <a className='link' href="https://vk.com/mariaa.rych">@linklink</a>
                </div>

                <div className="team-box">
                    <img className='team-img' src={require('../assets/face_main.png')} alt="" />
                    <div className="name">
                        Данил
                    </div>
                    <div className="role">
                        Role
                    </div>
                    <a className='link' href="https://vk.com/id296507510">@linklink</a>
                </div>

                <div className="team-box">
                    <img className='team-img' src={require('../assets/face_main.png')} alt="" />
                    <div className="name">
                        Александр
                    </div>
                    <div className="role">
                        Role
                    </div>
                    <a className='link' href="https://vk.com/poetry_avenue">@linklink</a>
                </div>

            </div>


            <div className="test" id='test'>
                <a className='test-link' href="https://docs.google.com/forms/d/e/1FAIpQLSetFG5UJsBrYPfrohTEfjBz040erVnzMwvybqe3dYQDyT42Jw/viewform">
                    Пройдите Тест
                </a>
            </div>

        </main>
    )
}

export default Main