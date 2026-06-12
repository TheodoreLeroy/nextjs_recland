export default function Banner({...props}:BannerProps) {
    return (
        <div className="sh-sidebar-banner">
            <a href={props.href}>
                <img src={props.src} alt={props.alt} />
            </a>
        </div>
    )
}