import React from 'react'
import { GetStaticProps } from 'next'
import { GetStaticPaths } from 'next'
import { ParsedUrlQuery } from "querystring";
import Navbar from '@/components/Navbar';
import GuideCard from '@/components/GuideCard';
import { guideDetails } from '@/utils';
import { SlugProps } from '@/utils';
import { fetchAPI } from '@/utils';
import { HighlightNames } from '@/utils';

interface Params extends ParsedUrlQuery {
    slug: string;
}


const HighlightDetails: React.FC<SlugProps> = ({ details, highlights }) => {

    return (

        <div className=' bg-white font-IBM-Plexo'>
            <Navbar highlights={highlights} />
            <div className='w-full h-[50vh] md:h-[70vh] lg:h-[90vh]'>
                <img src={details.image} className='w-full h-full' alt={`${details.name}-img`} />
            </div>
            <div className='p-[24px] mb-3'>


                <p className='card-heading py-3'>{details.name}</p>
                <p className='text-justify text-xl mt-5'>
                    {details.description}<br />
                    {details.activities[0].name}
                </p>
                <p className='text-xl font-semibold mt-10'>A little About {details.name} and culture in Hawaii</p><br/><br/>
                <p className='text-justify text-lg'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ab obcaecati ducimus esse! Nemo deleniti obcaecati ab, accusamus dolorem sed
                    eum expedita temporibus ipsa, possimus architecto eveniet quo officia alias commodi vero consequuntur quas maxime eligendi consectetur? Sequi
                    facilis debitis, in possimus laborum ipsum esse numquam a labore? Nisi eos a odio expedita? A, ipsa? Fugit unde suscipit incidunt reprehenderit
                    atque quae aliquam praesentium provident quaerat quia nulla officiis id optio totam, facilis aspernatur libero consequatur voluptas vero, iusto
                    alias culpa numquam excepturi. Eius, nostrum voluptas! Ratione at quidem nulla, sit minus recusandae ullam deserunt consectetur dicta facilis
                    alias cupiditate fugit atque, nam asperiores assumenda quis ut excepturi maxime unde eligendi. Tenetur, expedita? Pariatur non doloremque iusto
                    sapiente, sit mollitia quis aliquam autem deserunt excepturi vitae inventore, dignissimos enim similique unde sequi quos nulla quae aspernatur
                    aut harum animi officiis exercitationem? Eligendi dolorum, ad facilis eos perspiciatis veniam excepturi nostrum?
                </p>
            </div>
            <div className='flex flex-col gap-4 justify-between mx-auto items-center px-[24px] w-full mb-2 md:mb-8'>
                <div className='w-full'>{guideDetails.map(guide => <GuideCard guide={guide} key={guide.name} />)}</div>
                <button className='button booking-btn self-start'>Book Now !</button>
            </div>
        </div>
    )
}

export default HighlightDetails


export const getStaticPaths: GetStaticPaths = async () => {

    const paths = HighlightNames.map((detail) => ({
        params: {
            slug: detail
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {


    const { slug } = context.params as Params;
    const query = `activities/${slug}`;


    const details = await fetchAPI(query);
    const highlights = await fetchAPI('highlights')

    return {
        props: { details, highlights }
    }


}