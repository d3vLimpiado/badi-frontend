import { AvatarComponent } from "@/components";
import { ButtonComponent } from "@/components";

const { Avatar, AvatarFallback } = AvatarComponent;
const { Button } = ButtonComponent;

export default function UserSection() {
  const isLoggedIn = false;
  return (
    <section>
      {
        isLoggedIn ? (
          <Avatar className="cursor-pointer">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        ) : (
          <Button>LOGIN</Button>
        )
      }
    </section>
  )
}