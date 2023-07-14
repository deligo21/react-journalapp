import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dcyrxj27z',
    api_key: '549983355134723',
    api_secret: 'uqOVFiqT99fLXaEYUkDqlh1ng-o',
    secure: true,
})

describe('pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a Cloudinary', async() => {
        
        const imgUrl = 'https://pbs.twimg.com/media/E-Zt8FMUcAMLEvA.jpg';
        const resp = await fetch(imgUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.png');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        await cloudinary.api.delete_resources(['journal/' + imageId], {resource_type: 'image'});
    });

    test('debe de retornar null', async() => {
        const file = new File([], 'foto.png');

        const url = await fileUpload(file);
        expect(url).toBe(null);
    });
});