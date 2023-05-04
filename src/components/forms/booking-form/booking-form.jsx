import {useRef, useState} from "react";
import QSelectField from "../../ui/q-select-field/q-select-field";
import {floors, meetingRooms, towers} from "../../../data/select-fields/select-fields";
import {Box, Button, Card, CardHeader, Container, TextField, Typography} from "@mui/material";

export const BookingForm = () => {
    const [form, setForm] = useState({
        tower: '',
        floor: '',
        meetingRoom: '',
        date: '',
        comment: '',
    })

    const formRef = useRef()

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]: value
        });
    }
    const handleFormReset = () => {
        setForm({
            tower: '',
            floor: '',
            meetingRoom: '',
            date: '',
            comment: '',
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form)
    }

    return (
        <Container maxWidth={'sm'}>
            <form ref={formRef} onSubmit={handleSubmit}>
                <Card>
                    <CardHeader title={
                        <Typography variant={'h4'}>
                            Бронирование переговорной
                        </Typography>}/>
                    <Box p={2} display={'flex'} flexDirection={'column'} gap={2}>
                        <QSelectField
                            options={towers}
                            required
                            name={'tower'}
                            onChange={handleInputChange}
                            value={form.tower}
                            label={'Выберите башню'}
                        />
                        <QSelectField
                            options={floors}
                            required
                            name={'floor'}
                            value={form.floor}
                            onChange={handleInputChange}
                            label={'Выберите этаж'}
                        />
                        <QSelectField
                            options={meetingRooms}
                            required
                            name={'meetingRoom'}
                            value={form.meetingRoom}
                            onChange={handleInputChange}
                            label={'Выберите переговорную'}
                        />
                        <TextField
                            label="Выберите время"
                            type="datetime-local"
                            name={'date'}
                            required
                            value={form.date}
                            onChange={handleInputChange}
                            InputLabelProps={{
                                shrink: true,
                            }}/>
                        <TextField
                            required
                            name={'comment'}
                            value={form.comment}
                            onChange={handleInputChange}
                            label={'Оставьте комментарий'}
                            multiline
                        />
                        <Button type={'submit'} variant={'outlined'} color={"primary"}>Отправить</Button>
                        <Button onClick={handleFormReset} type={'button'} variant={'outlined'}
                                color={'error'}>Очистить</Button>
                    </Box>
                </Card>
            </form>
        </Container>
    )
}