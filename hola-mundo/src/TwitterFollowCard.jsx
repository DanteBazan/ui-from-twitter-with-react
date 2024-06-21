export function TwitterFollowCard({ userName, name, isFollowing, directionUrl }) {
    const addAt = (userName) => `@${userName}`;
    return (
        <article className="tw-follow-card">
            <header className="tw-perfile">
                <img src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" className="tw-perfile-img" />
                <div className="tw-perfile-description">
                    <strong>{name}</strong>
                    <span>{addAt(userName)}</span>
                </div>
            </header>

            <aside>
                <button className="tw-button-follow"><a href={directionUrl} target="__blank">Seguir</a></button>
            </aside>
        </article>
    )
}