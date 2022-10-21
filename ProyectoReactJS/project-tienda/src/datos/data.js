//informacion para la tabla
import { useMemo } from "react";

export default function useRows() {
    const rows = useMemo(() => [

        {
            user: 'camilo.bohorquez',
            pass: '1234qwerasd',
            edad: 36

        },
        {
            userr: 'juana.perez',
            pass: 'asd345vbn',
            edad: 28

        },
        {
            userr: 'Ana.robles',
            pass: '2w3e4r5t6y7u8i',
            edad: 55

        },
        {
            userr: 'Diomedes.martinez',
            pass: 'cde34rfvbgt5',
            edad: 60

        }
    ], []);

    return rows;

}
