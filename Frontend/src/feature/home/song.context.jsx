import { useState } from "react";
import { createContext } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    const [song, setSong] = useState(
        {
            title: 'Ehsaas(256k)',
            artist: 'Someone',
            mood: 'sad',
            url: 'https://ik.imagekit.io/learnhowworks/cohort-2/moodify/songs/Ehsaas_256k__IgHswczif.mp3',
            posterUrl: 'https://ik.imagekit.io/learnhowworks/cohort-2/moodify/posters/1000237238_lFbf5Wwrt.png',
            lyrics: 'ਸਡੀ ਕੋਸ਼ਿਸ਼ ਹਸਨੇ ਦੀ,ਤੂ ਫੇਰ ਰੂਲਾ ਗਈ ਏ\nਸਡੀ ਕੋਸ਼ਿਸ਼ ਹਸਨੇ ਦੀ,ਤੂ ਫੇਰ ਰੂਲਾ ਗਈ ਏ\nਅਸੀ ਪਿਹਲਾਂ ਈ ਕੱਲੇ ਸੀ,ਤੂ ਇਹਸਾਸ ਕਰਾ ਗਈ ਏ\nਅਸੀ ਪਿਹਲਾਂ ਈ ਕੱਲੇ ਸੀ,ਤੂ ਇਹਸਾਸ ਕਰਾ ਗਈ ਏ\nਇਹਸਾਸ ਕਰਾ ਗਈ ਏ\n\nਕੋਈ ਹੱਥ ਛੁਡਾ ਤੁਰ ਗਯੀ,ਮਜਬੂਰੀ ਸੀ ਕਿਹ ਕੇ\nਮੈਂ ਮੁੜ ਕੇ ਅਵਾਗ਼ੀ ,ਸਾਨੂ ਤੁਰ ਗਈ ਓ ਕਿਹ ਕੇ\nਹਾਈ ਕੋਈ ਹੱਥ ਛੁਡਾ ਤੁਰ ਗਯੀ,ਮਜਬੂਰੀ ਸੀ ਕਿਹ ਕੇ\nਮੈਂ ਮੁੜ ਕੇ ਅਵਾਗ਼ੀ ,ਸਾਨੂ ਤੁਰ ਗਈ ਓ ਕਿਹ ਕੇ\nਅੱਸੀ ਸਚ ਮਨ ਬੈਠੇ ਸੀ,ਓ ਲਰਾ ਲਾ ਗਈ ਏਹ\nਅਸੀ ਪਿਹਲਾਂ ਈ ਕੱਲੇ ਸੀ,ਤੂ ਇਹਸਾਸ ਕਰਾ ਗਈ ਏ\nਅਸੀ ਪਿਹਲਾਂ ਈ ਕੱਲੇ ਸੀ,ਤੂ ਇਹਸਾਸ ਕਰਾ ਗਈ ਏ\nਇਹਸਾਸ ਕਰਾ ਗਈ ਏ\n\nਇਹ ਜ਼ਿੰਦਗੀ ਕੰਡਿਆਂ  ਜਿਹੀ ਇਨੇ ਇਦਾਂ ਹੀ ਰਿਹਨਾ ਇਹ\nਕਿਸੇ ਸਾਨੂ ਸਮਝਣ ਦਾ,ਨਹੀ ਜੋਖਮ ਲੇਨਾ ਇਹ\n\nਇਹ ਜ਼ਿੰਦਗੀ ਕੰਡਿਆਂ  ਜਿਹੀ ਇਨੇ ਇਦਾਂ ਹੀ ਰਿਹਨਾ ਏ\nਕਿਸੇ ਸਾਨੂ ਸਮਝਣ ਦਾ,ਨਹੀ ਜੋਖਮ ਲੇਨਾ ਏ\nਅੱਸੀ ਦੁਖਦੇ ਸਿਹਣੇ ਦੀ,ਹੁਣ ਆਦਤ ਪਾ ਲਯੀ ਏ\nਅਸੀ ਪਿਹਲਾਂ ਈ ਕੱਲੇ ਸੀ,ਤੂ ਇਹਸਾਸ ਕਰਾ ਗਈ ਏ\nਅਸੀ ਪਿਹਲਾਂ ਈ ਕੱਲੇ ਸੀ,ਤੂ ਇਹਸਾਸ ਕਰਾ ਗਈ ਏ\nਇਹਸਾਸ ਕਰਾ ਗਈ ਏ\n\nਹੁਣ ਜ਼ਿਦ ਹੈ ਸ਼ੀਰੇ ਦੀ,ਕਿਸੇ ਨੂ ਅਪਣਾ ਕਿਹਨਾ ਨਹੀ\nਜੋ ਛੱਡ ਗਏ ਹੇਰਾਂ ਚ,ਓਹ੍ਨਾ ਦਾ ਨਾ ਵੀ ਲੇਨਾ ਨੀ\n\nਹੁਣ ਜ਼ਿਦ ਹੈ ਸ਼ੀਰੇ ਦੀ,ਕਿਸੇ ਨੂ ਅਪਣਾ ਕਿਹਨਾ ਨਹੀ\nਜੋ ਛੱਡ ਗਏ ਹੇਰਾਂ ਚ,ਓਹ੍ਨਾ ਦਾ ਨਾ ਵੀ ਲੇਨਾ ਨੀ\nਏ ਅਥਰੂ ਰੁੱਕਦੇ ਨਹੀ,ਕਿਹੋ ਜਿਹਾ ਰੋਗ ਲਗਾ ਗਈ ਏ\nਅਸੀ ਪਿਹਲਾਂ ਈ ਕੱਲੇ ਸੀ,ਤੂ ਇਹਸਾਸ ਕਰਾ ਗਈ ਏ\nਅਸੀ ਪਿਹਲਾਂ ਈ ਕੱਲੇ ਸੀ,ਤੂ ਇਹਸਾਸ ਕਰਾ ਗਈ ਏ\nਤੂ ਇਹ ਸਾਸ ਕਰਾ ਗਈ ਏ ਇਹਸਾਸ ਕਰਾ ਗਈ ਏ'
        }
    )

    const [loading, setLoading] = useState(false)

    return (
        <SongContext.Provider value={{ loading, setLoading, song, setSong }}>
            {children}
        </SongContext.Provider>
    )
}

