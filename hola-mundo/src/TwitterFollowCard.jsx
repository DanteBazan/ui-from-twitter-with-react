import { useState } from "react";

export function TwitterFollowCard({ children, userName, }) {
    const [isFollowing, setFollowing] = useState(false);
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-button-follow is-following' : 'tw-button-follow';
    const addAt = (userName) => `@${userName}`;

    // PERO ESTA ES LA FORMA RECOMENDADA QUE ES USANDO LA DESESTRUCTURACION

    // ESTA MANERA ES LA MISMA QUE LA DE ARRIBA, SON DOS FORMAS DIFERENTES DE USAR UN ESTADO
    // const [] = useState(false);
    // const isFollowing = state[0];
    // const setFollowing = state[1];

    const handleClick = () => {
        setFollowing(!isFollowing)
    }

    return (
        <article className="tw-follow-card">
            <header className="tw-perfile">
                <img src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" className="tw-perfile-img" />
                <div className="tw-perfile-description">
                    <strong>{children}</strong>
                    <span>{addAt(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick} >{text}</button>
            </aside>
        </article>
    )
}