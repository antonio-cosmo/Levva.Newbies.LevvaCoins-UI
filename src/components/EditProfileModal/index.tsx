import { Button } from "../Button";
import { Input } from "../Input";
import { Form, UserAvatar } from "./styles";

export function EditProfileModal() {
    return (
        <Form>
            <UserAvatar src="https://avatars.githubusercontent.com/u/77928459?v=4" />
            <Input type="text" value="Antônio Cosmo" />
            <Input type="text" value="antoniocosmosilvaneto@gmail.com" disabled />
            <Button type="submit" text="Atualizar" size="large" />
        </Form>
    )
}