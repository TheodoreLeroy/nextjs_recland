interface JobCardProps {
  id?: number,
  image: string,
  alt: string,
  isHot: boolean,
  tag: string,
  name: string,
  company: string,
  location: string,
  bonus: string,
  className?: string,
  slug?: string,
}

interface WidgetProps {
  id?: number,
  role: string,
  content: string,
  widgetList: string[],
  buttonText: string,
}

interface BannerProps {
  id?: number,
  href: string,
  src: string,
  alt: string,
}