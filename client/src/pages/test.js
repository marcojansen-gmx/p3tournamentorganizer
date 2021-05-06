
const handleOpen = () => {
    fetch("/api/attendance")
    .then((resp) => {
      return resp.json();
    })
    .then((user) => {
      return fetch("/api/attendancenotgoing", {
        method: "POST",
        body: JSON.stringify({
          userId: user.id,
          eventId: props.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    })
    .then((resp) => {
      if (resp.status !== 200) {
        throw resp.statusText;
      }
      return resp.json();
    });
    setOpen(true);
  };

