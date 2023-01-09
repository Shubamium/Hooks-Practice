import { useContext } from "react";
import BlogAction from "./BlogAction";
import LanguageContext from "./LanguageContext";

const BlogPost = () => {
    let lang = useContext(LanguageContext);
    return ( 
        <div className="blogpost m-4 grid grid-cols-2">
            <div className="blogpost__image" >
                <img src="https://picsum.photos/200/300" alt="random photos" />
            </div>
            <article className="blogpost__article">
                <p>
                    {lang === "English" 
                        ? "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." 
                        : "Di sisi lain, kami mencela dengan kemarahan yang benar dan tidak menyukai orang-orang yang begitu terpedaya dan terdemoralisasi oleh pesona kesenangan sesaat, begitu dibutakan oleh hasrat, sehingga mereka tidak dapat meramalkan rasa sakit dan masalah yang pasti akan terjadi; dan celaan yang sama dimiliki oleh mereka yang gagal dalam tugasnya karena kelemahan kemauan, yang sama dengan mengatakan karena menciut dari kerja keras dan rasa sakit. Kasing ini sangat sederhana dan mudah dibedakan. Di waktu luang, ketika kekuatan pilihan kita tidak terhalang dan ketika tidak ada yang menghalangi kemampuan kita untuk melakukan apa yang paling kita sukai, setiap kesenangan harus disambut dan setiap rasa sakit dihindari. Tetapi dalam keadaan-keadaan tertentu dan karena tuntutan kewajiban atau kewajiban-kewajiban bisnis, akan sering terjadi kesenangan harus ditolak dan gangguan-gangguan diterima. Oleh karena itu, orang bijak selalu berpegang pada prinsip pemilihan ini dalam hal ini: dia menolak kesenangan untuk mendapatkan kesenangan lain yang lebih besar, atau dia menahan rasa sakit untuk menghindari rasa sakit yang lebih buruk. " 
                    }
                </p>
                <BlogAction></BlogAction>
            </article>
        </div> 
    );
}
 
export default BlogPost;