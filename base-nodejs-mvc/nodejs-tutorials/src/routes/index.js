import userRouter from './user.js'
import newRouter from './new.js'
import loiNoiRouter from './loinoi.js'
import muctieuRouter from './muctieu.js'
import quanlyRouter from './quanly.js'
import tochucRouter from './tochuc.js'
import hieutruongRouter from './tochuc.js'
import teacherRouter from './teacher.js'
import nhanvienRouter from './nhanvien.js'
import noiquyRouter from './noiquy.js'
import contactRouter from './contact.js'

const routes = (app) => {

    app.use('/user', userRouter)
    app.use('/noiquy', noiquyRouter)
    app.use('/contact', contactRouter)
    app.use('/quanly', quanlyRouter)
    app.use('/tochuc', tochucRouter)
    app.use('/hieutruong', hieutruongRouter)
    app.use('/teacher', teacherRouter)
    app.use('/nhanvien', nhanvienRouter)
    app.use('/new', newRouter)
    app.use('/loinoi', loiNoiRouter)
    app.use('/muctieu', muctieuRouter)
    
}

export default routes