// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10)
  
  await prisma.user.upsert({
    where: { email: 'admin@highgrand.in' },
    update: {},
    create: {
      email: 'admin@highgrand.in',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  const categories = [
    { name: 'Graphic Oversized', slug: 'oversized-graphic', displayOrder: 1 },
    { name: 'Drop Shoulder', slug: 'drop-shoulder', displayOrder: 2 },
    { name: 'Round Neck', slug: 'round-neck', displayOrder: 3 },
    { name: 'Minimal', slug: 'minimal', displayOrder: 4 },
    { name: 'Polo', slug: 'polo', displayOrder: 5 },
    { name: 'Acid Wash', slug: 'acid-wash', displayOrder: 6 },
    { name: 'Tie Dye', slug: 'tie-dye', displayOrder: 7 },
    { name: 'Limited Edition', slug: 'limited-edition', displayOrder: 8 },
  ]

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: {
        ...cat,
        isActive: false,
      },
    })
  }

  console.log('Seed executed successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
