import Title from "../_components/Title"
import NotificationFields from "./_components/NotificiationFields"
import Search from "./_components/Search"

export default function NotificationsPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <Title>Notifications</Title>

      <div className="outline-1 outline-muted p-5 rounded-xl md:w-3/5 w-full mt-5">
        <NotificationFields />
      </div>
      <div className="outline-1 outline-muted p-5 rounded-xl md:w-3/5 w-full mt-5">
        <Search />
      </div>
    </div>

  )
}
