export function RepositoryItem(props){
    return (
        <li>
            <strong>{props.repository?.name ?? 'default'}</strong>
            <p>{props.repository?.description ?? 'default'}</p>
            <a href={props.repository?.link ?? 'default'}>
                Access Repository
            </a>
        </li>
    )
}