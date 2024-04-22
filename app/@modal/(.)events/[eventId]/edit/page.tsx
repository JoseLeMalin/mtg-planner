import EventEditPage from "@/app/events/[eventId]/edit/page";
import ModalIntercept from "@/src/components/ModalIntercept";

export default function EventEditModal({
  params,
  searchParams,
}: {
  params: {
    eventId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("Comming here?");

  return (
    <ModalIntercept params="dfsdfdsf">
      <EventEditPage params={{ eventId: "1" }} searchParams={searchParams} />;
    </ModalIntercept>
  );
}
