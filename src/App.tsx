import {useState} from "react";
import "./App.css";
import JSEncrypt from "jsencrypt";

function App() {
    const [pubKey, setPubKey] = useState("");
    const [priKey, setPriKey] = useState("");

    function putPubKey(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setPubKey(event.target.value);
    }

    function putPriKey(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setPriKey(event.target.value);
    }

    function genKey(){
        const jse = new JSEncrypt();
        const encrypt = jse.getKey();
        setPubKey(encrypt.getPublicKey());
        setPriKey(encrypt.getPrivateKey());
    }
    function checkKey(){
        alert("check ok!")
    }

    return (
        <main className="w-full h-screen">
            <h1 className="text-center h-12 text-4xl my-4">Qing Toolbox</h1>
            <div className="flex flex-col items-center place-content-around">            
                <textarea id="pub" onChange={putPubKey} value={pubKey}
                className="w-2xl h-64 my-2 border border-solid"
                />
                <textarea id="pri" onChange={putPriKey} value={priKey}
                className="w-2xl h-64 my-2 border border-solid"
                />
                <div className="flex flex-row">
                    <button 
                    className="mx-2 px-2 py-1 border border-solid border-blue-400 rounded-xl" 
                    onClick={genKey}>生成RSA密钥</button>
                    <button 
                    className="mx-2 px-2 py-1 border border-solid border-blue-400 rounded-xl" 
                    onClick={checkKey}>检查RSA密钥</button>
                </div>
            </div>
        </main>
    );
}

export default App;
