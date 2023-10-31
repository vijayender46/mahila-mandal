import React from 'react'
const posts = [
    {
      id: 'post1',
      title: 'Health and Education',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }
    },
      {
        id: 'post2',
        title: 'Medical & Treatment',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        author: {
          name: 'Michael Foster',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    },
    {
        id: 'post3',
        title: 'Help and Donate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        author: {
          name: 'Michael Foster',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    }
]

export default function Features() {
  return (
    <section className='container'>
        <div className="mx-auto my-10 grid gap-4 max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-center py-12 shadow rounded bg-[#eaeaea]">
                    <div className='feature-img'>
                        <img className='rounded-full overflow-hidden' width={128} src={post.author.imageUrl} alt={post.title} />
                    </div>
                <div className="group relative text-center px-10">
                    <h3 className="mt-5 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">   
                        <span className="absolute inset-0" />
                        {post.title}                 
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>              
                </article>
            ))}
            </div>
          </section>
  )
}
