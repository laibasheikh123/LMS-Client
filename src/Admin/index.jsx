
import { Routes, Route } from "react-router-dom"

export default function Admin() {
    return (
        <Routes>
            <Route path='/' element={<h1>I am Dashboard - Admin</h1>} />
            <Route path='/finance' element={<h1>I am finance</h1>} />
            <Route path='/account' element={<h1>I am account</h1>} />
            <Route path='/setting' element={<h1>I am setting</h1>} />
        </Routes>
    )
}
