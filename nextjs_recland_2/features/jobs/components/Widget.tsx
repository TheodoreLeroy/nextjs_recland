
export default function Widget({role, content, widgetList, buttonText}: WidgetProps) {
    return (
        <div className="sh-sidebar-widget">
            <h4 className="sh-widget-title"><i className="fa fa-briefcase"></i> {role}</h4>
            <div className="sh-widget-content">
                <p>{content}</p>
                <ul className="sh-widget-list">
                    {widgetList.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
                <a href="employer.html" className="sh-widget-btn">{buttonText}</a>
            </div>
        </div>
    )
}